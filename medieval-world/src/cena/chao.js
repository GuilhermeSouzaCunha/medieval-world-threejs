import * as TRES from 'three';

export default class Chao {
    constructor() {
        const carregadorTextura = new TRES.TextureLoader();
        const texturaChao = carregadorTextura.load('../public/textures/Ground068_1K-JPG_Color.jpg');
        texturaChao.wrapS = texturaChao.wrapT = TRES.RepeatWrapping;
        texturaChao.repeat.set(10, 10);
        texturaChao.anisotropy = 16;

        const materialChao = new TRES.MeshStandardMaterial({ map: texturaChao });

        this.mesh = new TRES.Mesh(
            new TRES.PlaneGeometry(500, 500),
            materialChao
        );
        this.mesh.rotation.x = -Math.PI / 2;
        this.mesh.receiveShadow = true;
    }
}
