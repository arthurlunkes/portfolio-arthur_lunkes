import React from 'react';

const Main: React.FC = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <img
        src='https://avatars.githubusercontent.com/u/90714332?v=4'
        alt='Arthur Lunkes'
      />
      <h1>Arthur Lunkes</h1>
      <p>
        Olá! Eu sou o Arthur Lunkes, um desenvolvedor fullstack com experiência em servidores,
        gerenciamento de VMs e virtualizadores. Já trabalhei como desenvolvedor fullstack, com
        infraestrutura em TI, e tenho experiência em WordPress, Figma, Windows e Linux.
      </p>
      <h2>Contato</h2>
      <p>Email: arthur.lunkes2017@gmail.com</p>
      <p>Email: arthur.lunkes2@gmail.com</p>
      <p>Telefone: +55 046 99110-0092</p>
      <h2>Projetos:</h2>
      <p>
        Confira meus projetos no GitHub:{' '}
        <a
          href='https://github.com/arthur-lunkes'
          target='_blank'
          rel='noopener noreferrer'
        >
          github.com/arthur-lunkes
        </a>
      </p>
    </div>
  );
};

export default Main;
