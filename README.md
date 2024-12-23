<h2>Descrição do Projeto</h2>
<p>Este é um projeto desenvolvido em <a href="https://threejs.org/">Three.js</a>, criado com a ajuda do <a href="https://vitejs.dev/">Vite</a>. Ele apresenta um mundo limitado de malha, onde os jogadores podem se movimentar livremente e explorar uma vila medieval. O ambiente conta com terrenos texturizados, elementos 3D detalhados, iluminação realista e controles de câmera. Este projeto foi criado como parte de um trabalho acadêmico para a disciplina de Computação Gráfica no IFSP.</p>

<h2>Demonstração</h2>
<p>Confira o vídeo de apresentação do projeto no YouTube:</p>
<p><a href="https://www.youtube.com/watch?v=2-VEtsEwmfA" target="_blank">Assista ao vídeo aqui</a>.</p>

<h2>Requisitos do Sistema</h2>
<ul>
    <li><a href="https://nodejs.org/">Node.js</a> (versão 16 ou superior)</li>
    <li>Navegador moderno com suporte a WebGL</li>
</ul>

<h2>Instruções para Execução</h2>

<h3>1. Clone o Repositório</h3>
<pre>
    <code>
        git clone https://github.com/seu-usuario/medieval-world-threejs.git
        cd medieval-world-threejs
    </code>
</pre>

<h3>2. Instale as Dependências</h3>
<p>Certifique-se de que o Node.js está instalado, e execute o seguinte comando:</p>
<pre>
    <code>
        npm install
    </code>
</pre>

<h3>3. Inicie o Servidor de Desenvolvimento</h3>
<p>Para iniciar o projeto em um servidor local, execute:</p>
<pre>
    <code>
        npm run dev
    </code>
</pre>
<p>Abra o navegador e acesse o link fornecido pelo Vite (geralmente <code>http://localhost:5173</code>).</p>

<h3>4. Construir para Produção (Opcional)</h3>
<p>Para gerar os arquivos otimizados para produção, use:</p>
<pre>
    <code>
        npm run build
    </code>
</pre>
<p>Os arquivos serão gerados na pasta <code>dist/</code>.</p>

<h2>Tecnologias Utilizadas</h2>
<ul>
    <li><a href="https://threejs.org/">Three.js</a> - Biblioteca principal para renderização 3D</li>
    <li><a href="https://vitejs.dev/">Vite</a> - Ferramenta de desenvolvimento</li>
    <li><a href="https://threejs.org/docs/#examples/en/loaders/GLTFLoader">GLTFLoader</a> - Para carregar modelos 3D</li>
</ul>

<h2>Créditos e Referências</h2>
<ul>
    <li>Modelos 3D:
        <ul>
            <li><a href="https://polyhaven.com/">Polyhaven</a> - Modelos gratuitos</li>
            <li><a href="https://sketchfab.com/">Sketchfab</a> - Comunidade de modelos 3D</li>
        </ul>
    </li>
    <li>Texturas:
        <ul>
            <li><a href="https://ambientcg.com/">AmbientCG</a> - Texturas PBR gratuitas</li>
        </ul>
    </li>
    <li>Documentação do Three.js: <a href="https://threejs.org/docs/">https://threejs.org/docs/</a></li>
</ul>
