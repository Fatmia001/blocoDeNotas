const STORAGE_KEY = 'blocoDeNotas.conteudo';

function getSavedNote() {
    try {
        return localStorage.getItem(STORAGE_KEY) || '';
    } catch (error) {
        console.warn('Não foi possível acessar o localStorage.', error);
        return '';
    }
}

function saveNote(content) {
    try {
        localStorage.setItem(STORAGE_KEY, content);
    } catch (error) {
        console.warn('Não foi possível salvar a nota.', error);
    }
}

function initializeNotes() {
    const blocoDeNotas = document.getElementById('blocoDeNotas');
    const botaoLimpar = document.getElementById('limparNota');

    if (!blocoDeNotas || !botaoLimpar) {
        console.error('Elementos necessários não foram encontrados no DOM.');
        return;
    }

    blocoDeNotas.value = getSavedNote();

    blocoDeNotas.addEventListener('input', event => {
        saveNote(event.target.value);
    });

    botaoLimpar.addEventListener('click', () => {
        blocoDeNotas.value = '';
        saveNote('');
        blocoDeNotas.focus();
    });
}

document.addEventListener('DOMContentLoaded', initializeNotes);
