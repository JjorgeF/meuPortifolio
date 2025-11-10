import React, { useState, useEffect } from 'react';

const codeSnippets = [
  {
    language: 'HTML',
    fileName: 'index.html',
    color: 'text-orange-400',
    code: [
      '<!DOCTYPE html>',
      '<html>',
      '  <body>',
      '    <h1>Meu Portfólio</h1>',
      '    <p>Em breve...</p>',
      '  </body>',
      '</html>',
    ],
  },
  {
    language: 'CSS',
    fileName: 'style.css',
    color: 'text-blue-400',
    code: [
      'body {',
      '  background: #1a202c;',
      '  color: #e2e8f0;',
      '  font-family: "Inter", sans-serif;',
      '}',
      '.title {',
      '  animation: fadeIn 2s ease-in-out;',
      '}',
    ],
  },
  {
    language: 'JavaScript',
    fileName: 'script.js',
    color: 'text-yellow-300',
    code: [
      '// script.js',
      "console.log('Site em construção...');",
      'function animateIntro() {',
      '  const title = document.querySelector(".title");',
      "  title.style.opacity = 1;",
      '}',
      'document.addEventListener("DOMContentLoaded", animateIntro);',
    ],
  },
  {
    language: 'Python',
    fileName: 'app.py',
    color: 'text-green-400',
    code: [
      '# app.py (Flask)',
      "from flask import Flask",
      'app = Flask(__name__)',
      '',
      '@app.route("/")',
      'def home():',
      '    return "<h1>Meu portfólio está chegando!</h1>"',
    ],
  },
];

const TYPING_SPEED = 60;
const PAUSE_BETWEEN_LINES = 500;
const PAUSE_BETWEEN_SNIPPETS = 2500;

export const CodeTerminal: React.FC = () => {
  const [snippetIndex, setSnippetIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const [typedCode, setTypedCode] = useState('');

  const currentSnippet = codeSnippets[snippetIndex];
  const currentLine = currentSnippet.code[lineIndex];

  useEffect(() => {
    // Typing animation for the current line
    if (lineIndex < currentSnippet.code.length) {
      if (typedCode.length < currentLine.length) {
        const timeout = setTimeout(() => {
          setTypedCode(currentLine.slice(0, typedCode.length + 1));
        }, TYPING_SPEED);
        return () => clearTimeout(timeout);
      } else {
        // Pause after a line is typed, then move to the next
        const timeout = setTimeout(() => {
          setLineIndex(lineIndex + 1);
          setTypedCode('');
        }, PAUSE_BETWEEN_LINES);
        return () => clearTimeout(timeout);
      }
    } else {
      // Pause after a snippet is complete, then move to the next
      const timeout = setTimeout(() => {
        setSnippetIndex((prevIndex) => (prevIndex + 1) % codeSnippets.length);
        setLineIndex(0);
      }, PAUSE_BETWEEN_SNIPPETS);
      return () => clearTimeout(timeout);
    }
  }, [typedCode, lineIndex, snippetIndex, currentSnippet.code.length, currentLine]);

  const completedLines = currentSnippet.code.slice(0, lineIndex).map((line, index) => (
    <div key={index}>
      <span className="text-slate-500 mr-4 select-none">{index + 1}</span>
      <span dangerouslySetInnerHTML={{ __html: line.replace(/</g, "&lt;").replace(/>/g, "&gt;") || '&nbsp;' }} />
    </div>
  ));

  return (
    <div className="w-full max-w-lg md:max-w-2xl mx-auto bg-slate-800/80 backdrop-blur-sm rounded-lg shadow-2xl shadow-sky-500/10 font-mono text-sm text-slate-300 overflow-hidden">
      <div className="bg-slate-900/70 flex items-center justify-between px-4 py-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className={`flex items-center space-x-2 ${currentSnippet.color}`}>
           <span className="font-bold">{currentSnippet.language}</span>
           <span>-</span>
           <span>{currentSnippet.fileName}</span>
        </div>
      </div>
      <div className="p-4 h-64 overflow-y-auto">
        {completedLines}
        <div>
           <span className="text-slate-500 mr-4 select-none">{lineIndex + 1}</span>
           <span>{typedCode}</span>
           <span className="bg-slate-300 w-2 h-4 inline-block animate-pulse ml-1"></span>
        </div>
      </div>
    </div>
  );
};
