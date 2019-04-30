import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            globalTitle: "Titre de la Page"
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubimit = this.handleSubimit.bind(this)

    }
    handleChange(event) {
        this.setState({ title: event.target.value })
    }
    handleSubimit(event) {
        event.preventDefault();
        this.setState({ globalTitle: "Mon formulaire " + this.state.title })

    }
    componentDidMount() {
        console.log("Formulaire rendu")
    }
    componentDidUpdate() {
        console.log("Titre changé")
    }
    render() {
        return (
            <div>
                <h1>{this.state.globalTitle}</h1>
                <form onSubmit={this.handleSubimit}>
                    <label>
                        Champ de text
                        <input type="text" value={this.state.title} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="envoyer" />
                </form>

            </div>

        )
    }

}

export default Form;
