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
    const botaoSalvar = document.getElementById('salvarNota');

    if (!blocoDeNotas || !botaoLimpar || !botaoSalvar) {
        console.error('Elementos necessários não foram encontrados no DOM.');
        return;
    }

    blocoDeNotas.value = getSavedNote();

    blocoDeNotas.addEventListener('input', event => {
        saveNote(event.target.value);
    });

    botaoSalvar.addEventListener('click', () => {
        saveNote(blocoDeNotas.value);
        alert('Notas salvas com sucesso!');
    });

    botaoLimpar.addEventListener('click', () => {
        blocoDeNotas.value = '';
        saveNote('');
        blocoDeNotas.focus();
    });
}

document.addEventListener('DOMContentLoaded', initializeNotes);
