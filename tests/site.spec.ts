import { expect, test } from "@playwright/test";

test("les pages, les photographies et la mise en page fonctionnent", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  const routes = ["/", "/a-propos", "/tarifs", "/contact", "/accompagnements/magnetisme", "/accompagnements/coupeur-de-feu", "/accompagnements/pour-les-animaux"];
  for (const route of routes) {
    const response = await page.goto(route);
    expect(response?.status(), route).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    await expect(page.getByRole("main")).toHaveCount(1);
    expect(await page.locator("html").getAttribute("lang")).toBe("fr");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), route).toBe(true);
    for (const image of await page.locator("main img").all()) {
      await image.scrollIntoViewIfNeeded();
      await expect.poll(() => image.evaluate(element => (element as HTMLImageElement).naturalWidth), { message: `Photo chargée sur ${route}` }).toBeGreaterThan(0);
    }
  }
  expect(errors).toEqual([]);
});

test("le rendez-vous mène au bon calendrier et le dialogue se ferme au clavier", async ({ page }) => {
  await page.goto("/");
  const trigger = page.locator(".hero").getByRole("button", { name: /Prendre rendez-vous/ });
  await trigger.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  const calendarLink = dialog.getByRole("link", { name: "Choisir mon créneau" });
  await expect(calendarLink).toHaveAttribute("href", "https://calendar.app.google/j2YTzUd2ZfYNoNmg7");
  await dialog.getByRole("radio", { name: /À distance/ }).check();
  await expect(calendarLink).toHaveAttribute("href", "https://calendar.app.google/k2DB19H3ei4ZEvL86");
  await dialog.getByLabel("Votre accompagnement").selectOption("animaux");
  await expect(dialog.getByText("Séance offerte", { exact: true })).toBeVisible();
  await expect(dialog.getByRole("radio", { name: /À distance/ })).toBeChecked();
  await expect(dialog.getByRole("link", { name: "07 66 28 80 88" })).toHaveAttribute("href", "tel:+33766288088");
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(trigger).toBeFocused();
  await expect(page.locator("body")).not.toHaveCSS("overflow", "hidden");
});

test("la navigation et les réponses aux questions sont utilisables", async ({ page }, testInfo) => {
  await page.goto("/");
  const question = page.locator("summary").filter({ hasText: "Comment se passe une séance à distance ?" });
  await question.click();
  await expect(page.getByText("Après un premier échange par téléphone", { exact: false })).toBeVisible();
  if (testInfo.project.name === "mobile") {
    await page.getByRole("button", { name: "Ouvrir le menu" }).click();
    await expect(page.getByRole("button", { name: "Fermer le menu" })).toHaveAttribute("aria-expanded", "true");
  }
  await page.getByRole("navigation", { name: "Navigation principale" }).getByRole("link", { name: "Tarifs", exact: true }).click();
  await expect(page).toHaveURL(/\/tarifs$/);
  await expect(page.getByRole("heading", { name: "50 €", exact: true })).toBeVisible();
  if (testInfo.project.name === "mobile") {
    await expect(page.getByRole("button", { name: "Ouvrir le menu" })).toHaveAttribute("aria-expanded", "false");
  }
  await page.getByRole("contentinfo").getByRole("link", { name: /Toutes les informations/ }).click();
  await expect(page).toHaveURL(/\/contact$/);
  await expect(page.getByRole("main").getByRole("link", { name: /contact@artisandelumiere.com/ })).toHaveAttribute("href", "mailto:contact@artisandelumiere.com");
});

test("une page inconnue propose un retour vers l’accueil", async ({ page }) => {
  const response = await page.goto("/accompagnements/inconnu");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { name: "Reprenons le bon chemin." })).toBeVisible();
  await page.getByRole("link", { name: "Revenir à l’accueil" }).click();
  await expect(page).toHaveURL("/");
});
