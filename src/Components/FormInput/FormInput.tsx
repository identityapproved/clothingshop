import React, { FC, InputHTMLAttributes } from 'react';
import { Group, Input, Label } from './FormInput.styles';

type FormInputProps = {
	label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
	return (
		<Group>
			<Input {...otherProps} />

			{label && (
				<Label shrink={Boolean(otherProps.value && typeof otherProps.value === 'string' && otherProps.value.length)}>
					{label}
				</Label>
			)}
		</Group>
	);
};

export default FormInput;