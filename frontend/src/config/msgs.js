import Vue from "vue"
import Toasted from "vue-toasted"

Vue.use(Toasted, {
    iconPack: "fontawesome",
    duration: 3000
})

Vue.toasted.register(
    'defaultSuccess',
    payload => !payload.sg ? 'Operação realizada com sucesso!' : payload.msg,
    { type: "success", icon: "check" }
)

Vue.toasted.register(
    'defaultError',
    payload => !payload.msg ? "Ooops... erro inesperado." : payload.msg,
    { type: "error", icon: "times" }
)