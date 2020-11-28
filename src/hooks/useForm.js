import { useState } from "react";


export const useForm = (initialState = {}) => {
	const [ formState, setFormState ] = useState(initialState);

	const reset = () => {
		console.log('jejejejeje')
		setFormState( initialState );
	}

	const handleInputChange = ({target}) => { //desestructuro del evento el target
		setFormState({
			...formState,
			[target.name] : target.value
		})
	}

	return [ formState, handleInputChange, reset ];
}