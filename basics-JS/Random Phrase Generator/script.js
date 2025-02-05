const phrases = [
    "A vida é uma peça de teatro que não permite ensaios.",
    "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
    "A persistência é o caminho do êxito.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Acredite em si mesmo e tudo será possível.",
    "Não espere por oportunidades, crie-as.",
    "Cada dia é uma nova chance para mudar sua vida.",
    "A gratidão transforma o que temos em suficiente."
  ];
let selectedPhrase = "";
  function generatePhrase(){
        const randomIndex = Math.floor(Math.random() * phrases.length);
        selectedPhrase = phrases[randomIndex]
        document.getElementById("phrase").textContent = selectedPhrase;
  }
  function muddlePhrase(){
    if (!selectedPhrase) {
        document.getElementById("phrase").textContent = "Nenhuma frase gerada ainda!";
        return;
    }
    const formPhrase = selectedPhrase.split("");
    formPhrase.sort(() => 0.8 - Math.random());
    document.getElementById("phrase").textContent = formPhrase.join("");
}   