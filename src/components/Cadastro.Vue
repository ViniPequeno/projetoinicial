<template>
    <div>
        <h3>Cadastro de produto</h3>
        <b-form @submit="onSubmit" @reset="onReset">
            <b-form-group id="codigo"
                            label="Codigo:"
                            label-for="codigoInput"
                            description="Codigo do produto">
                <b-form-input id="codigoInput"
                            type="text"
                            v-model="form.codigo"
                            required
                            placeholder="Enter codigo">
                </b-form-input>
            </b-form-group>
            <b-form-group id="nome"
                            label="Name:"
                            label-for="nomeInput">
                <b-form-input id="nomeInput"
                            type="text"
                            v-model="form.nome"
                            required
                            placeholder="Enter name">
                </b-form-input>
            </b-form-group>
            <b-form-group id="quantidade"
                            label="Quantidade:"
                            label-for="quantidadeInput">
                <b-form-input id="quantidadeInput"
                            type="number"
                            v-model="form.quantidade"
                            required
                            placeholder="Enter quantidade">
                            </b-form-input>
            </b-form-group>
            <b-form-group id="valor"
                            label="Valor:"
                            label-for="valorInput">
                <b-form-input id="valorInput"
                            type="number" step="0.01"
                            v-model="form.valor"
                            required
                            placeholder="Enter value">
                            </b-form-input>
            </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    </div>
</template>

<script>
export default {
  name: "Cadastro",
  data() {
    return {
      form: {
        codigo: "",
        nome: "",
        valor: "",
        quantidade: ""
      }
    };
  },

  methods: {
    onSubmit: function() {
      event.preventDefault();

    },
    onReset: function() {
      event.preventDefault();
      this.form.codigo = "";
      this.form.nome = "";
      this.form.quantidade = "";
      this.form.valor = "";
    }
  }
};
</script>

<style scoped>
</style>
