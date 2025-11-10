import React from 'react';
import { CodeTerminal } from './components/GearIcon';
import { SocialLink } from './components/SocialLink';
import { GithubIcon, LinkedinIcon, MailIcon } from './components/SocialIcons';

const App: React.FC = () => {
  return (
    <main className="bg-slate-900 min-h-screen flex flex-col items-center justify-center p-4 font-sans text-center overflow-hidden">
      
      <CodeTerminal />

      <div className="z-10 bg-slate-900/50 backdrop-blur-sm p-6 rounded-lg mt-8">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-2">
          Portfólio em Construção
        </h1>
        <p className="text-slate-300 text-lg md:text-xl max-w-md mx-auto">
          Meu novo site está sendo cuidadosamente montado. Volte em breve para ver as novidades e meus projetos!
        </p>
      </div>

      <div className="mt-12">
        <p className="text-amber-400 font-semibold mb-4">Enquanto isso, me encontre aqui:</p>
        <div className="flex items-center justify-center space-x-6">
          <SocialLink href="https://github.com/JjorgeF" aria-label="Github Profile">
            <GithubIcon />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/jorge-felipe-silva-71477a192" aria-label="LinkedIn Profile">
            <LinkedinIcon />
          </SocialLink>
          <SocialLink href="mailto:jorgefelipe0299@gmail.com" aria-label="Send an Email">
            <MailIcon />
          </SocialLink>
        </div>
      </div>
    </main>
  );
};

export default App;