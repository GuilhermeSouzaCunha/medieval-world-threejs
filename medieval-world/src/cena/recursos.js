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

    carregarModelo(caminho, objetos) {
        this.carregadorGLTF.load(caminho, (gltf) => {
            const modelo = gltf.scene;
            modelo.castShadow = true;
            modelo.position.set(0, 0, -5);
            this.cena.cena.add(modelo);
            objetos.push(modelo);
        });
    }
}
