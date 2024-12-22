import Cena from '/src/cena/cena.js';
import Controles from '/src/controles/controles.js';
import CarregadorRecursos from '/src/cena/recursos.js';

const cena = new Cena();
const camera = cena.camera;
const renderizador = cena.renderizador;
const objetos = cena.objetos;

const carregador = new CarregadorRecursos(cena);
carregador.carregarAmbiente('../public/textures/autumn_field_puresky_4k.hdr');

carregador.carregarModelo('../public/modelos/medieval_house_4.glb', objetos, { x: 40, y: 0, z: -30 });
carregador.carregarModelo('../public/modelos/medieval_house_4.glb', objetos, { x: -35, y: 0, z: 25 });
carregador.carregarModelo('../public/modelos/medieval_house_4.glb', objetos, { x: 50, y: 0, z: 60 });
carregador.carregarModelo('../public/modelos/medieval_house_4.glb', objetos, { x: -55, y: 0, z: -40 });
carregador.carregarModelo('../public/modelos/medieval_house_4.glb', objetos, { x: 30, y: 0, z: -15 });
carregador.carregarModelo('../public/modelos/medieval_house_4.glb', objetos, { x: -30, y: 0, z: 50 });
carregador.carregarModelo('../public/modelos/medieval_house_4.glb', objetos, { x: 60, y: 0, z: 50 });
carregador.carregarModelo('../public/modelos/medieval_house_4.glb', objetos, { x: -45, y: 0, z: -25 });
carregador.carregarModelo('../public/modelos/medieval_house_4.glb', objetos, { x: 25, y: 0, z: 35 });
carregador.carregarModelo('../public/modelos/medieval_house_4.glb', objetos, { x: -20, y: 0, z: -50 });
carregador.carregarModelo('../public/modelos/medieval_house_4.glb', objetos, { x: 15, y: 0, z: 45 });
carregador.carregarModelo('../public/modelos/medieval_house_4.glb', objetos, { x: -60, y: 0, z: 15 });
carregador.carregarModelo('../public/modelos/medieval_house_4.glb', objetos, { x: 10, y: 0, z: -60 });
carregador.carregarModelo('../public/modelos/medieval_house_4.glb', objetos, { x: 5, y: 0, z: 25 });
carregador.carregarModelo('../public/modelos/medieval_house_4.glb', objetos, { x: -5, y: 0, z: 60 });
carregador.carregarModelo('../public/modelos/medieval_house_4.glb', objetos, { x: 40, y: 0, z: 20 });
carregador.carregarModelo('../public/modelos/medieval_house_4.glb', objetos, { x: -10, y: 0, z: -30 });
carregador.carregarModelo('../public/modelos/medieval_house_4.glb', objetos, { x: 45, y: 0, z: -25 });
carregador.carregarModelo('../public/modelos/medieval_house_4.glb', objetos, { x: -50, y: 0, z: 50 });

carregador.carregarModelo('../public/modelos/medieval_church.glb', objetos, { x: 5, y: 0, z: 10 }, { x: 1.5, y: 1.5, z: 1.5 });

carregador.carregarModelo('../public/modelos/medieval_well (3).glb', objetos, { x: -30, y: 0, z: -10 }, { x: 0.90, y: 0.90, z: 0.90 });
carregador.carregarModelo('../public/modelos/medieval_well (3).glb', objetos, { x: 35, y: 0, z: 40 }, { x: 0.90, y: 0.90, z: 0.90 });


const controles = new Controles(camera, objetos);
controles.habilitar();

function animar() {
    requestAnimationFrame(animar);
    controles.atualizar();
    renderizador.render(cena.cena, camera);
}

animar();
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderizador.setSize(window.innerWidth, window.innerHeight);
});
