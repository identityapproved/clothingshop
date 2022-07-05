import React from 'react'
import { Group, Input, Label } from './FormInput.styles.jsx'

const FormInput = ({ label, ...otherProps }) => {
	return (
		<Group>
			<Input {...otherProps} />

			{label && (
				<Label shrink={otherProps.value.length}>
					{label}
				</Label>
			)}
		</Group>
	)
}

export default FormInput