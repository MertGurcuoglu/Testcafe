import { Selector } from "testcafe";

fixture`TestCafe Full Form Testi`
  .page`https://devexpress.github.io/testcafe/example/`;

test("Tüm form elemanlarının doldurulması ve doğrulanması", async (t) => {
  // Elemanlar
  const nameInput = Selector("#developer-name");
  const osRadioWindows = Selector("#windows");
  const interfaceCheckbox = Selector("#tried-test-cafe");
  const sliderHandle = Selector(".ui-slider-handle");
  const sliderTrack = Selector(".slider"); // Drag hedefi
  const submitButton = Selector("#submit-button");
  const resultHeader = Selector("#article-header");

  const featureCheckboxes = [
    Selector("#remote-testing"),
    Selector("#reusing-js-code"),
    Selector("#background-parallel-testing"),
    Selector("#continuous-integration-embedding"),
    Selector("#traffic-markup-analysis"),
  ];

  const interfaceSelect = Selector("#preferred-interface");
  const commentsArea = Selector("#comments");




  //form alanlarını doldurma
  await t
    .typeText(nameInput, "Mert Gurcuoglu") // İsim
    .click(osRadioWindows) // OS seçimi
    .click(interfaceCheckbox); // TestCafe deneyimi işaretlenir

  for (const checkbox of featureCheckboxes) {
    await t.click(checkbox); // Tüm özellikler
  }

  await t
    .click(interfaceSelect)
    .click(interfaceSelect.find("option").withText("JavaScript API")) // Arayüz seçimi
    .typeText(commentsArea, "TestCafe harika bir araç.") // Yorum

    // Slider’ı sürükle (yaklaşık %50)
    .drag(sliderHandle, 650, 0, { offsetX: 10, offsetY: 10 })

    // Formu gönder
    .click(submitButton)

    // Doğrulama
    .expect(resultHeader.innerText)
    .eql("Thank you, Mert Gurcuoglu!");

    

});
