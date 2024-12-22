import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

export default class CarregadorRecursos {
    constructor(cena) {
        this.cena = cena;
        this.carregadorRGBE = new RGBELoader();
        this.carregadorGLTF = new GLTFLoader();
    }

    carregarAmbiente(caminho) {
        this.carregadorRGBE.load(caminho, (textura) => {
            textura.mapping = THREE.EquirectangularReflectionMapping;
            this.cena.cena.environment = textura;
            this.cena.cena.background = textura;
        });
    }

    carregarModelo(caminho, objetos, posicao = { x: 0, y: 0, z: 0 }, escala = { x: 1, y: 1, z: 1 }) {
        this.carregadorGLTF.load(caminho, (gltf) => {
            const modelo = gltf.scene;
            modelo.castShadow = true;
            modelo.position.set(posicao.x, posicao.y, posicao.z);  
            modelo.scale.set(escala.x, escala.y, escala.z);       
            this.cena.cena.add(modelo);
            objetos.push(modelo);
        });
    }
}
