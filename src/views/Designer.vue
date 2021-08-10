<template>
  <designer-card-view></designer-card-view>
</template>

<script>
import DesignerCardView from "../components/card_table/DesignerCardView.vue";
export default {
  components: { DesignerCardView }
};
</script>

<style lang="scss">
.buttons {
  margin-top: 35px;
}

.handle {
  cursor: grabbing;
}

.cursor-grabbing * {
  cursor: grabbing !important;
}
</style>
