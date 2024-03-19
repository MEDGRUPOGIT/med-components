/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { distanciaEuclidiana, getPositionFromEvent } from '../../../../../@templarios/utilities/position';
export class MedAlternativasBase {
  constructor(parent) {
    this.parent = parent;
    this.distanciaMinimaClick = 50;
    this.tempoLongPress = 1000;
  }
  resetState() {
    this.parent.riscarAtivoIndice = -1;
    this.parent.permiteAlterar = true;
  }
  handleClick(event) {
    if (!event.target.classList.contains('med-alternativas') &&
      event.target.tagName !== 'MED-ALTERNATIVAS') {
      this.resetState();
    }
  }
  onAlternativasChanged(newValue, oldValue) {
    if (newValue != oldValue) {
      this.resetState();
    }
  }
  onTouchStart(event, indice) {
    var _a;
    if (event.type === 'mousedown' && this.parent.blockMouseEvents)
      return;
    if (event.type === 'touchstart') {
      this.parent.blockMouseEvents = true;
    }
    if ((_a = event.target
      .closest('.med-alternativas__riscar')) === null || _a === void 0 ? void 0 : _a.classList.contains('med-alternativas__riscar')) {
      return;
    }
    this.dataStart = new Date();
    this.positionStart = getPositionFromEvent(event);
    this.timer = setTimeout(() => {
      this.dataEnd = new Date();
      const tempoTotal = this.dataEnd.getTime() - this.dataStart.getTime();
      if (tempoTotal >= this.tempoLongPress) {
        this.parent.riscarAtivoIndice = indice;
        this.parent.permiteAlterar = false;
      }
    }, this.tempoLongPress);
  }
  onTouchEnd(event, alternativa) {
    var _a;
    if (event.type === 'mouseup' && this.parent.blockMouseEvents) {
      this.parent.blockMouseEvents = false;
      return;
    }
    if ((_a = event.target
      .closest('.med-alternativas__riscar')) === null || _a === void 0 ? void 0 : _a.classList.contains('med-alternativas__riscar')) {
      return;
    }
    const positionEnd = getPositionFromEvent(event);
    clearTimeout(this.timer);
    if (this.parent.permiteAlterar &&
      distanciaEuclidiana(this.positionStart, positionEnd) <
        this.distanciaMinimaClick) {
      this.parent.riscarAtivoIndice = -1;
      this.alterarAlternativa(alternativa);
    }
    this.parent.permiteAlterar = true;
  }
  alterarAlternativa(item) {
    var _a, _b;
    const alternativa = item;
    if (alternativa.Riscada && this.parent.permiteRiscar) {
      return;
    }
    if (this.parent.alternativaSelecionada === alternativa.Alternativa &&
      this.parent.permiteDesmarcar) {
      this.parent.alternativaSelecionada = '';
      return (_a = this.parent.medChange) === null || _a === void 0 ? void 0 : _a.emit(Object.assign(Object.assign({}, alternativa), { Alternativa: '' }));
    }
    this.parent.alternativaSelecionada = alternativa.Alternativa;
    (_b = this.parent.medChange) === null || _b === void 0 ? void 0 : _b.emit(alternativa);
  }
  riscar(event, alternativa) {
    var _a;
    event.stopPropagation();
    const naoRiscadas = this.parent.alternativas.filter((alt) => !alt.Riscada);
    if (naoRiscadas.length === 1 &&
      naoRiscadas.some((alt) => alternativa.Alternativa === alt.Alternativa))
      return;
    alternativa[this.parent.keyRiscada] = !alternativa[this.parent.keyRiscada];
    this.parent.riscarAtivoIndice = -1;
    (_a = this.parent.medRiscada) === null || _a === void 0 ? void 0 : _a.emit(alternativa);
    this.parent.permiteAlterar = true;
    this.parent.alternativas = [...this.parent.alternativas];
  }
  imageRequest(event, alternativa) {
    var _a;
    event.stopPropagation();
    (_a = this.parent.medGalleryRequest) === null || _a === void 0 ? void 0 : _a.emit(alternativa);
  }
}
