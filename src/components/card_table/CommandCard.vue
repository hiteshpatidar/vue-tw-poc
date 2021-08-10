<template>
  <div>
    <b-row>
      <b-col sm="2"><b-form-checkbox> </b-form-checkbox></b-col>
      <b-col sm="2">
        <div class="handle">
          <b-icon font-scale="2" icon="grip-horizontal" />
        </div>
      </b-col>
      <b-col sm="2">{{ item.id }}</b-col>

      <b-col sm="2">{{ item.name }}</b-col>
      <b-col sm="2">{{ item.sport }}</b-col>
      <b-col sm="2">
        <!-- <b-icon
          v-if="item.persons && item.persons.length"
          font-scale="2"
          icon="chevron-down"
          v-b-toggle="getTarget(item.id)"
        /> -->
        <b-icon
          v-if="item.persons && item.persons.length"
          @click="actionClick(item)"
          font-scale="2"
          icon="chevron-down"
          :class="item.cardVisible ? null : 'collapsed'"
          :aria-expanded="item.cardVisible ? 'true' : 'false'"
          :aria-controls="getTarget(item.id)"
        />
        <!-- <b-button
          :class="visible ? null : 'collapsed'"
          :aria-expanded="visible ? 'true' : 'false'"
          aria-controls="collapse-4"
          @click="visible = !visible"
        >
          Toggle Collapse
        </b-button> -->
        <!-- <b-collapse id="collapse-4" v-model="visible" class="mt-2">
          <b-card>I should start open!</b-card>
        </b-collapse> -->
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "CommandCard",
  props: {
    item: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  data() {
    return {
      visible: true
    };
  },
  methods: {
    actionClick(item) {
      this.$emit("toggle", item);
      // this.visible = !this.visible;
    },
    getTarget(id) {
      return `'collapse-${id}'`;
    }
  }
};
</script>

<style></style>
