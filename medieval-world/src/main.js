import Cena from '/src/cena/cena.js';
import Controles from '/src/controles/controles.js';
import CarregadorRecursos from '/src/cena/recursos.js';

const cena = new Cena();
const camera = cena.camera;
const renderizador = cena.renderizador;
const objetos = cena.objetos;

const carregador = new CarregadorRecursos(cena);
carregador.carregarAmbiente('../public/textures/autumn_field_puresky_4k.hdr');
//carregador.carregarModelo('../models/house_model.glb', objetos);

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
