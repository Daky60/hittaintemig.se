function generatePreview(name, address, ssn, phone) {
  const lines = [
    "Hej!",
    "Jag vill härmed utöva min rätt till radering med stöd av artikel 17 i dataskyddsförordningen.",
    "Jag ber er att radera alla personuppgifter som ni har om mig från er hemsida, däribland:",
    `Namn: ${name}`,
    `Adress: ${address}`,
    `Personnummer: ${ssn}`,
    `Telefonnummer: ${phone}`,
    "",
    "Ni kan hitta information om era skyldigheter som personuppgiftsansvarig på Integritetsskyddsmyndighetens webbplats (www.imy.se).",
    "",
    "Jag ser fram emot ert svar på min begäran om radering så snart som möjligt, senast inom en månad.",
    "",
    "Ni får gärna kontakta mig om ni har några frågor.",
    "Med vänliga hälsningar",
    name
  ];

  return lines.join('\n');
}
