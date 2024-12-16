import * as TRES from 'three';
import Chao from '/src/cena/chao.js';

export default class Cena {
    constructor() {
        this.cena = new TRES.Scene();
        this.camera = new TRES.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.set(0, 2, 5);

        this.renderizador = new TRES.WebGLRenderer();
        this.renderizador.setSize(window.innerWidth, window.innerHeight);
        this.renderizador.shadowMap.enabled = true;
        document.body.appendChild(this.renderizador.domElement);

        this.objetos = [];

        this.#adicionarLuzes();
        this.#adicionarChao();
    }

    #adicionarLuzes() {
        const luzAmbiente = new TRES.AmbientLight(0xffffff, 0.5);
        this.cena.add(luzAmbiente);

        const luzDirecional = new TRES.DirectionalLight(0xffffff, 1);
        luzDirecional.position.set(5, 10, 5);
        luzDirecional.castShadow = true;
        this.cena.add(luzDirecional);
    }

    #adicionarChao() {
        const chao = new Chao();
        this.cena.add(chao.mesh);
        this.objetos.push(chao.mesh);
    }
}
