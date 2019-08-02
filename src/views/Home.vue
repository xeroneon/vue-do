<script>

export default {
  name: 'home',
  data: function () {
    return {
      todo: ''
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    },
    todos () {
      return this.$store.state.todos
    }
  },
  methods: {
    addTodo: function () {
      this.$store.commit({
        type: 'addTodo',
        title: this._data.todo
      })

      this._data.todo = ''
    },
    completeTodo: function (index) {
      this.$store.commit({
        type: 'completeTodo',
        index
      })
    },
    deleteTodo: function (index) {
      this.$store.commit({
        type: 'deleteTodo',
        index
      })
    }
  }
}
</script>

<template>
  <div class="home">
    <div class="container">
      <h1>Todos</h1>
      <form>
        <input id="input" type="text" v-model="todo" placeholder=" What do you need to do?"/>
        <button id="inputButton" @click.prevent="addTodo">ADD</button>
      </form>
      <ul>
        <transition-group name="fade">
          <li v-bind:key="todo" v-for="(todo, index) in todos">
            <span v-bind:class="{strikethrough: todo.done}">
              {{todo.title}}
            </span>
            <button @click.prevent="completeTodo(index)">&#10004;</button>
            <button @click.prevent="deleteTodo(index)">X</button>
          </li>
        </transition-group>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.fade-move {
  transition: transform .5s;
}

.fade {
  transition: transform .5s;
}
  .home {
    display: grid;
    place-content: center;
    place-items: center;
    grid-template-columns: 1fr;
    text-align: center;
  }
  .container {
    max-width: 1024px;
    width: 80%;
    min-height: 300px;
    background: #424242;
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    color: white;
    border-radius: 20px;
  }

  .strikethrough {
    text-decoration: line-through;
  }

  form {
    display: flex;
    align-items: center;
  }

  #input {
    border-radius: 15px 0 0 15px;
    padding: 5px;
    // padding-left: 10px;
    border: none;
    height: 60px;
    line-height: 60px;
    font-size: 30px;
    width: 400px;

    &::placeholder {
      font-size: 30px;
    }

    &:focus {
      outline: 0
    }
  }

  #inputButton {
    border-radius: 0 15px 15px 0;
    padding: 5px;
    color: white;
    font-size: 20px;
    border: none;
    height: 70px;
    width: 150px;
    padding-right: 10px;
    font-weight: bold;
    background-image: linear-gradient(#263238, #37474f);

    &:focus {
      outline: 0
    }
  }

  ul {
    list-style: none;
    // align-self: center;
    width: 70%;

    li {
      background: #263238;
      font-weight: bold;
      font-size: 40px;
      margin-top: 15px;
      padding: 5px;
      display: grid;
      grid-template-columns: 9fr 1fr .5fr;
      border-radius: 20px;
      padding: 10px;

      span {
        justify-self: left;
      }

      button {
        justify-self: right;
        background: none;
        border: white 1px solid;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        font-size: 20px;

        &:focus {
          outline: 0
        }
      }

    }
  }

</style>
