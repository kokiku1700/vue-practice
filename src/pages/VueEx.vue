<template class="q-pa-md q-gutter-md">
  <q-card-section>Message: {{ msg }}</q-card-section>
	<q-separator />

  <q-card-section>Using text interpolation: {{ rawHtml }}</q-card-section>
  <q-card-section>Using v-html directive: <span v-html="rawHtml"></span></q-card-section>
  <q-separator />
  
  <q-card-section>
    <q-btn
      unelevated
      color="primary"
      type="a"
      target="_blank"
      v-bind:id="linkId"
      v-bind:href="link.to"
      :title="link.title"
      :label="link.label"
    ></q-btn>
  </q-card-section>
  <q-separator />
  
  <q-card-section>
    <q-btn :disable="isButtonDisabled" label="버튼 보이기"></q-btn>
  </q-card-section>
  <q-separator />
 
  <q-card-section>{{ number + 1 }}</q-card-section>
  <q-separator />
  
  <q-card-section>{{ ok ? "YES" : "NO" }}</q-card-section>
  <q-separator />
 
  <q-card-section>{{ message.split("").reverse().join("") }}</q-card-section>
  <q-separator />
  
  <q-card-section :id="`list-${id}`"> list-{{ id }} </q-card-section>
  <q-separator />
  
  <q-card-section>책을 가지고 있다: {{ publishedBooksMessage }}</q-card-section>
	<q-separator />
  
  <q-card-section class="text-h6">
    {{ toTitleDate }}
    {{ calculateDate() }}
  </q-card-section>
	<q-separator />
  
  <q-card-section :style="styleObject">change color</q-card-section>

  <q-card-section :style="[baseStyles, overridingStyles]">change color</q-card-section>
  <q-separator />

  <q-btn @click="awesome = !awesome" label="toggle"></q-btn>
  <q-card-section v-if="awesome"> Vue is awesome! </q-card-section>
  <q-card-section v-else> on no! </q-card-section>
  <q-separator />

  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-if="ok" dark boeder class="bg-blue-7 my-card">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </q-card-section>
    </q-card>
  </div>

  <div class="q-pa-md">
    <q-list v-for="(item, idx) in listItems" :key="idx" bordered separator>
      <q-item clickable v-ripple>
        <q-item-section>{{  idx + 1 }}. {{ item.message }}</q-item-section>
      </q-item>
    </q-list>
  </div>
  <q-separator />
  
  <div class="q-pa-md">
    <q-list v-for="(item, index) in listItems" :key="index" bordered separator>
      <q-item clickable v-ripple>
        <q-item-section>
            {{ parentMessage }} - {{ index + 1 }} - {{ item.message }}
        </q-item-section>
      </q-item>
    </q-list>
  </div>
  <q-separator />

  <div class="q-pa-md">
    <q-list
      v-for="(value, key, index) in myObject"
      :key="index"
      bordered
      separator 
    >
      <q-item clickable v-ripple>
        <q-item-section>
          {{ index + 1 }}. {{ key }} : {{ value }}
        </q-item-section>
      </q-item>
    </q-list>
  </div>
  <q-separator />

  <div class="q-pa-md row items-start">
    <q-btn @click="count++" label="카운트" color="primary"></q-btn>
    <q-card-section>Count is: {{ count }}</q-card-section>
  </div>
  <q-separator />

  <div class="q-pa-md row items-start">
    <q-btn
      @click="say('안녕')"
      label="안녕이라고 말하기"
      color="secondary"
      class="q-ma-sm"></q-btn>
    <q-btn
      @click="say('잘가')"
      label="잘가라고 말하기"
      color="secondary"
      class="q-ma-sm"></q-btn>
  </div>
  <q-separator />

  <div class="q-pa-md row items-start">
    <q-btn
      @click="warn('아직 양식을 제출할 수 없습니다.', $event)"
      label="아직 양식을 제출할 수 없습니다."
      color="secondary"
      class="q-ma-sm"></q-btn>
      <q-btn 
        @click="(event) => warn('아직 양식을 제출할 수 없습니다1.', event)"
        label="아직 양식을 제출할 수 없습니다1"
        color="secondary"
        class="q-ma-sm"></q-btn>
  </div>
  <q-separator />

  <div class="q-pa-md row items-start">
    <q-btn label="stop" color="primary" @click.stop="doThis" class="q-ma-sm" />
    
    <q-form
      label="prevent"
      color="primary"
      @submit.prevent="doThis"
      class="q-ma-sm"
    >
      <q-input v-model="name" />
      <q-btn label="submit" type="submit"></q-btn>
    </q-form>

    <q-btn
      label="stopPrevent"
      color="primary"
      @click.stop.prevent="doThis()"
      class="q-ma-sm" />
    
    <q-form
      label="prevent"
      color="primary"
      @submit.prevent
      class="q-ma-sm" 
    >
      <q-input v-model="name" />
      <q-btn label="submit" type="submit"></q-btn>
    </q-form> 

    <q-btn label="self" color="primary" @click.self="doThis" class="q-ma-sm" />
  </div>

  <q-card-section class="col-4">
    메세지 입력하기 : {{ text }}
    <q-input
      outlined
      bottom-slots
      v-model.lazy="text"
      label="Label"
      counter
      :dense="true"
    >
      <template v-slot:prepend>
        <q-icon name="place" />
      </template>
      <template v-slot:append>
        <q-icon name="close" @click="text = ''" class="cursor-pointer" />
      </template>

      <template v-slot:hint> Field hint </template>
    </q-input>

    <span>여러 줄 메세지:</span>
    <p style="white-space: pre-line;">{{ textArea }}</p>
    <div class="q-pa-md" style="max-width: 300px">
      <q-input
        v-model="textArea"
        filled
        type="textarea" />
    </div>
  </q-card-section>
  <q-separator />
  
  <q-card-section class="col-4 q-mt-md">
    <q-option-group
      v-model="group"
      :options="opts"
      color="green"
      type="checkbox"
      />
      {{ group }}
  </q-card-section>

  <q-card-section class="col-4 q-mt-md">
    <q-radio v-model="color" val="teal" label="Teal" color="teal" />
    <q-radio v-model="color" val="orange" label="Orange" color="orange" />
    <q-radio v-model="color" val="red" label="Red" color="red" />
    <q-card-section>
      {{ color }}
    </q-card-section>
  </q-card-section>

  <input ref="input" />

</template>

<script>
  import { date } from "quasar";
  
  export default {
    title:"Vue Basic",
    name:'VueEx',
    component:{},
    data(){
        return{
          msg: "hello Vue",

          rawHtml: `<span style="color: red">빨간색이어야 합니다.</span>`,

          linkId: "vue",

	        link: {
	          to: "http://vuejs.org",
	          title: "뷰 공식 사이트",
	          label: "Vuejs.org",
          },

          isButtonDisabled: true,

          ok: true,

				  number: 1000,

	        message:
	          "지금까지 템플릿의 단순한 속성만 있었습니다. 그러나 Vue는 실제로 모든 데이터가 내에서 JavaScript 강화의 모든 기능을 지원합니다.",
	        
          id: "genie",
          
          author: {
            name: 'John Doe',
            books: [
              'Vue 2 - Advanced Guide',
              'Vue 3 - Basic Guide',
              'Vue 4 - The Mystery'
            ]
          },
          
          str:'',
          
          styleObject: {
            color: 'red',
            fontSize: '13px',
          },

          baseStyles:{
            textDecorationLine: 'underline',
            textDecorationThickness: '5px',
            textDecorationColor: 'red',
          },

          overridingStyles: {
            color:'blue',
            fontSize:'35px',
          },

          awesome: true,

          ok: true,
          
          parentMessage: 'Parent',
          listItems: [{ message: "Foo" }, { message: "Bar "}],

          myObject: {
            title: 'Vue에서 목록을 작성하는 방법',
            author: '홍길동',
            ppublishedAt: '2016-04-10',
          },

          count: 0,

          name: "Vue.js",

          say(message) {
            alert(message)
          },

          text: "",

          textArea: "",

          group: ["op1"],
          opts: [
            {
              label: "Option 1",
              value: "op1",
            },
            {
              label: "Option 2",
              value: "op2",
            },
            {
              label: "Option 3",
              value: "op3",
            },
          ],
          color: "",
          
          

        }
    },
    computed:{
        publishedBooksMessage() {
          return this.author.books.length > 0 ? 'Yes' : 'No'
        },

        toTitleDate() {
          const timeStamp = Date.now();
          const formattedString = date.formatDate(timeStamp, "YYYY-MM-DD HH:mm");
          return formattedString;
        },

    },
    watch:{

    },
    mounted(){
      this.$refs.input.focus()
    },
    methods:{
      calculateDate() {
	      setInterval(()=>{
          const timeStamp = Date.now();
          const formattedString = date.formatDate(timeStamp, "YYYY-MM-DD HH:mm:ss");
          this.str = formattedString;
        }, 1000);
        return this.str; // binding 되는 변수 필요
	    },

      warn(message, event) {
        if (event) {
          event.preventDefault();
          this.$q
          .dialog({
            title: "Alert",
            message: `${message}`,
          })
          .onOk(() => {

          })
          .onCancel(() => {

          })
          .onDismiss(() => {

          });
        }
      },
      
      doThis(event) {
        console.log(event)
        this.$q.notify({
          color: "green-5",
          textColor: "white",
          icon: "warning",
          message: `doThis pointerType`,
        });
        console.log("doThis pointerType", event);
      },
      doThat(event) {
        this.$q.notify({
          color: "yellow-5",
          textColor: "white",
          icon: "warning",
          message: `doThat pointerType`,
        });
        console.log("doThat event", event);
      },
      
    },

 }
</script>

<style scoped>
  .my-card {
    width: 100%;
    max-width: 250px;
  }
</style>