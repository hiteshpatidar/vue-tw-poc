<template>
  <div class="bg-gray-200 rounded-lg px-3 py-3 column-width rounded mr-4">
    {{ commandDataCases.steps[0] }}
    <b-card
      class="text-center mt-3"
      v-for="step in commandDataCases.steps"
      :key="step.id"
      ref="card-drag"
    >
      <b-row>
        <b-col sm="1"><b-form-checkbox> </b-form-checkbox></b-col>
        <b-col sm="1">
          <div class="handle">
            <b-icon font-scale="2" icon="grip-horizontal" />
          </div>
        </b-col>
        <b-col sm="2">{{ step.operationName }}</b-col>
        <b-col sm="2">{{ step.actionName }}</b-col>
        <b-col sm="2">{{ step.value }}</b-col>
        <b-col sm="2">{{ step.description }}</b-col>

        <b-col sm="2">{{ step.screenshot }}</b-col>
      </b-row>
    </b-card>
    <!-- <draggable
      :class="{ [`cursor-grabbing`]: dragging === true }"
      v-model="list"
      group="Group"
      @start="dragging = true"
      @end="dragging = false"
      @change="dragChanged"
      handle=".handle"
      :animation="200"
      :move="onMoveCallback"
    >
      <b-card
        class="text-center mt-3"
        v-for="item in list"
        :key="item.id"
        ref="card-drag"
      >
        <command-card :item="item" @toggle="toggle"></command-card>
        <b-collapse
          v-model="item.cardVisible"
          :class="addTargetClass(item.id)"
          class="mt-2"
        >
          <draggable
            :class="{ [`cursor-grabbing`]: dragging === true }"
            v-model="item.persons"
            group="Group"
            @start="dragStart"
            @end="dragEnd"
            @change="dragChanged"
            handle=".handle"
            :animation="200"
          >
            <div v-for="person in item.persons" :key="person.id">
              <command-card :item="person" @toggle="toggle"></command-card>
            </div>
          </draggable>
        </b-collapse>
      </b-card>
    </draggable> -->
  </div>
</template>

<script>
// import draggable from "vuedraggable";
// import CommandCard from "./CommandCard.vue";
import TS_Check from "../../assets/testsuitelist/TS_Check.json";
export default {
  name: "DesignerCardView",
  // components: { draggable, CommandCard },
  data() {
    return {
      opened: [],
      commandData: TS_Check,
      commandDataCases: TS_Check.Cases[0],
      list: [
        {
          id: 1,
          name: "Abby",
          sport: "basket",
          cardVisible: false,
          persons: [
            {
              isActive: true,
              id: 140,
              name: "Dickerson",
              sport: "Macdonald"
            },
            {
              isActive: false,
              id: 121,
              name: "Larsen",
              sport: "Shaw"
            },
            {
              isActive: false,
              id: 189,
              name: "Geneva",
              sport: "Wilson"
            },
            {
              isActive: true,
              id: 138,
              name: "Jami",
              sport: "Carney"
            }
          ]
        },
        {
          id: 5,
          name: "no child Brooke",
          sport: "foot",
          cardVisible: false,
          persons: []
        },
        {
          id: 2,
          name: "Brooke",
          sport: "foot",
          cardVisible: false,
          persons: [
            {
              isActive: true,
              id: 240,
              name: "Dickerson",
              sport: "Macdonald",
              persons: [
                {
                  isActive: true,
                  id: 2240,
                  name: "inner Dickerson",
                  sport: "Macdonald"
                }
              ]
            },
            {
              isActive: false,
              id: 221,
              name: "Larsen",
              sport: "Shaw"
            },
            {
              isActive: false,
              id: 289,
              name: "Geneva",
              sport: "Wilson"
            },
            {
              isActive: true,
              id: 238,
              name: "Jami",
              sport: "Carney"
            }
          ]
        },
        {
          id: 3,
          name: "Courtenay",
          sport: "volley",
          cardVisible: false,
          persons: [
            {
              isActive: true,
              id: 340,
              name: "Dickerson",
              sport: "Macdonald"
            },
            {
              isActive: false,
              id: 321,
              name: "Larsen",
              sport: "Shaw"
            },
            {
              isActive: false,
              id: 389,
              name: "Geneva",
              sport: "Wilson"
            },
            {
              isActive: true,
              id: 338,
              name: "Jami",
              sport: "Carney"
            }
          ]
        },
        {
          id: 4,
          name: "David",
          sport: "rugby",
          cardVisible: false,
          persons: [
            {
              isActive: true,
              id: 4440,
              name: "Dickerson",
              sport: "Macdonald"
            },
            {
              isActive: false,
              id: 4421,
              name: "Larsen",
              sport: "Shaw"
            },
            {
              isActive: false,
              id: 4489,
              name: "Geneva",
              sport: "Wilson"
            },
            {
              isActive: true,
              id: 4438,
              name: "Jami",
              sport: "Carney"
            }
          ]
        }
      ],
      persons: [
        {
          isActive: true,
          id: 540,
          name: "Dickerson",
          sport: "Macdonald"
        },
        { isActive: false, id: 521, name: "Larsen", sport: "Shaw" },
        {
          isActive: false,
          id: 589,
          name: "Geneva",
          sport: "Wilson",
          persons: [
            {
              isActive: true,
              id: 240,
              name: "Dickerson",
              sport: "Macdonald"
            },
            {
              isActive: false,
              id: 221,
              name: "Larsen",
              sport: "Shaw"
            },
            {
              isActive: false,
              id: 289,
              name: "Geneva",
              sport: "Wilson"
            },
            {
              isActive: true,
              id: 238,
              name: "Jami",
              sport: "Carney"
            }
          ]
        },
        { isActive: true, id: 538, name: "Jami", sport: "Carney" }
      ],
      dragging: false,
      openRowId: null
    };
  },
  methods: {
    dragStart(eventData) {
      this.dragging = true;
      console.log("dragStart");
      console.log(eventData);
    },
    dragEnd(eventData) {
      this.dragging = false;
      console.log("dragEnd");
      console.log(eventData);
    },
    dragChanged(eventData) {
      if (eventData.moved) {
        console.log(
          "Moved",
          eventData.moved.element,
          eventData.moved.newIndex,
          eventData.moved.oldIndex
        );
      }
    },
    toggle(item) {
      // console.log(item);
      item.cardVisible = !item.cardVisible;
      // const index = this.opened.indexOf(id);
      // if (index > -1) {
      //   this.opened.splice(index, 1);
      // } else {
      //   this.opened.push(id);
      // }
      // this.openRowId = id;
    },
    getTarget(id) {
      return `'collapse-${id}'`;
    },
    addTargetClass(id) {
      return `collapse-${id}`;
    },
    onMoveCallback(evt, originalEvent) {
      console.log("==== originalEvent =====");
      console.log(originalEvent);
      console.log("==== evt =====");
      console.log(evt);
      // this.list.forEach(function(element) {
      //   element.cardVisible = false;
      // });

      // this.list[evt.draggedContext.futureIndex].cardVisible = true;
      // this.list[evt.draggedContext.index].cardVisible = true;

      // setTimeout(() => {}, 100);

      // evt.relatedContext.element.cardVisible = true;
      // let matches = evt.related.getElementsByClassName(
      //   this.addTargetClass(evt.relatedContext.element.id)
      // );
      // if (matches.length > 0) {
      //   matches.item(0).classList.add("show");
      //   matches.item(0).style.display = "";
      // }
      return true;
    }
  },
  mounted
};

function mounted() {
  //todo
}
</script>

<style lang="scss">
.moving-card {
  @apply opacity-50 bg-gray-100 border border-blue-500;
}
</style>
