import Vue from 'vue';

Vue.directive('my-transform', {
  bind(el, binding, vnode) {
    let current = 0;
    el.addEventListener('dblclick', () => {
      let degreeStep = binding.value || 90;
      current += degreeStep;
      el.style.transform = `rotate(${current}deg)`;

      if (binding.modifiers.animate) {
        el.style.transition = "transforms 0.5s"
      }
    });
  }
});
