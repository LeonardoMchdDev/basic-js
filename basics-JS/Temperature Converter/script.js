// Função para converter de Celsius para Fahrenheit
function convertFromCelsius() {
    // Obtém o valor inserido no campo de entrada do Celsius
    const celsiusInput = document.getElementById('celsius').value;

    // Converte o valor para um número decimal
    const celsius = parseFloat(celsiusInput);

    // Verifica se o valor é um número válido
    if (isNaN(celsius)) {
        displayResult("Please enter a valid Celsius value.");
        return;
    }

    // Fórmula para converter Celsius para Fahrenheit
    const fahrenheit = (celsius * 9 / 5) + 32;

    // Exibe o resultado formatado
    displayResult(`${celsius}°C = ${fahrenheit.toFixed(2)}°F`);
}

// Função para converter de Fahrenheit para Celsius
function convertFromFahrenheit() {
    // Obtém o valor inserido no campo de entrada do Fahrenheit
    const fahrenheitInput = document.getElementById('fahrenheit').value;

    // Converte o valor para um número decimal
    const fahrenheit = parseFloat(fahrenheitInput);

    // Verifica se o valor é um número válido
    if (isNaN(fahrenheit)) {
        displayResult("Please enter a valid Fahrenheit value.");
        return;
    }

    // Fórmula para converter Fahrenheit para Celsius
    const celsius = (fahrenheit - 32) * 5 / 9;

    // Exibe o resultado formatado
    displayResult(`${fahrenheit}°F = ${celsius.toFixed(2)}°C`);
}

// Função para exibir o resultado na página
function displayResult(message) {
    // Obtém o elemento HTML onde o resultado será exibido
    const resultElement = document.getElementById('result');

    // Atualiza o conteúdo do elemento com a mensagem
    resultElement.textContent = message;
	
}
