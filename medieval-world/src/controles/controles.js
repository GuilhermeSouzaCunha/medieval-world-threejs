import * as TRES from 'three';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';

export default class Controles {
    constructor(camera, objetos) {
        this.camera = camera;
        this.objetos = objetos;
        this.controles = new PointerLockControls(this.camera, document.body);
        this.movimento = { frente: false, tras: false, esquerda: false, direita: false };
        this.velocidadeMovimento = 0.2;

        this.#configurarEventos();
    }

    habilitar() {
        document.addEventListener('click', () => {
            this.controles.lock();
        });
    }

    #configurarEventos() {
        window.addEventListener('keydown', (evento) => {
            switch (evento.code) {
                case 'KeyW':
                    this.movimento.frente = true;
                    break;
                case 'KeyS':
                    this.movimento.tras = true;
                    break;
                case 'KeyA':
                    this.movimento.esquerda = true;
                    break;
                case 'KeyD':
                    this.movimento.direita = true;
                    break;
            }
        });

        window.addEventListener('keyup', (evento) => {
            switch (evento.code) {
                case 'KeyW':
                    this.movimento.frente = false;
                    break;
                case 'KeyS':
                    this.movimento.tras = false;
                    break;
                case 'KeyA':
                    this.movimento.esquerda = false;
                    break;
                case 'KeyD':
                    this.movimento.direita = false;
                    break;
            }
        });
    }

    atualizar() {
        const vetorFrente = new TRES.Vector3();
        const vetorDireita = new TRES.Vector3();
        const direcao = new TRES.Vector3();
        const posicaoTemporaria = new TRES.Vector3();

        vetorFrente.set(0, 0, Number(this.movimento.tras) - Number(this.movimento.frente));
        vetorDireita.set(Number(this.movimento.direita) - Number(this.movimento.esquerda), 0, 0);

        direcao.subVectors(vetorFrente, vetorDireita).normalize();
        const deslocamento = direcao.clone().applyEuler(this.camera.rotation).multiplyScalar(this.velocidadeMovimento);
        posicaoTemporaria.copy(this.camera.position).add(deslocamento);

        if (!this.#detectarColisoes(posicaoTemporaria)) {
            this.camera.position.x = posicaoTemporaria.x;
            this.camera.position.z = posicaoTemporaria.z;
        }

        const alturaChao = this.#detectarAlturaChao(this.camera.position);
        if (alturaChao !== null) {
            this.camera.position.y = alturaChao;
        }
    }

    #detectarAlturaChao(posicao) {
        const detectorChao = new TRES.Raycaster();
        const alturaChaoOffset = 2;
        detectorChao.set(posicao, new TRES.Vector3(0, -1, 0));
        const interseccoes = detectorChao.intersectObjects(this.objetos, true);

        if (interseccoes.length > 0) {
            const alturaChao = interseccoes[0].point.y;
            return alturaChao + alturaChaoOffset;
        }
        return null;
    }

    #detectarColisoes(posicao) {
        const raycaster = new TRES.Raycaster();
        const distanciaColisao = 0.5;

        const direcoes = [
            new TRES.Vector3(1, 0, 0),
            new TRES.Vector3(-1, 0, 0),
            new TRES.Vector3(0, 0, 1),
            new TRES.Vector3(0, 0, -1),
        ];

        for (let dir of direcoes) {
            raycaster.set(posicao, dir);
            const interseccoes = raycaster.intersectObjects(this.objetos, true);

            if (interseccoes.length > 0 && interseccoes[0].distance < distanciaColisao) {
                return true;
            }
        }
        return false;
    }
}
