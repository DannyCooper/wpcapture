import { __ } from '@wordpress/i18n';
import { createRoot } from 'react-dom/client';
import { Button, Card, CardBody, TextControl, SelectControl } from '@wordpress/components';
import { useState, useEffect } from 'react';
import apiFetch from '@wordpress/api-fetch';
import {
    useDispatch,
    useSelect,
} from '@wordpress/data';
import {
    Fragment,

} from '@wordpress/element';

const OptionsPage = () => {

	const [isLoading, setIsLoading] = useState(true);
	const [CustomSettings, setCustomSettings] = useState( '' );
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [provider, setProvider] = useState('');
	const [lists, setLists] = useState('');
	const [apiSettings, setApiSettings] = useState({ api_key: '', secret_key: '' });

	const handleKeyChange = (key, newValue) => {
		console.log(newValue);
        setApiSettings({ ...apiSettings, [key]: newValue });
    };

	useEffect( () => {
		const fetchSettings = async () => {
			const results = await apiFetch( {
				path: 'plugin-name/v1/settings'
			});
			console.log(results);

			const lists = await apiFetch( {
				path: 'plugin-name/v1/lists'
			});
			setLists(lists);

			setApiSettings( results );
			setIsLoading(false);
		};
		fetchSettings().catch( ( error ) => {
			console.error( error );
		} );
	}, [] );

	const handleSubmit = async ( event ) => {
		setIsSubmitting(true);
		event.preventDefault();
		console.log(apiSettings);
		const results = await apiFetch( {
			path: 'plugin-name/v1/settings',
			method: 'POST',
			data: {
				apiSettings,
			},
		} );
		console.log(results.apiSettings);
		setApiSettings( results.apiSettings );
		setIsSubmitting(false);
		setIsSuccess(true);

		setTimeout(() => {
			setIsSuccess(false);
		}, 3000);
	};

	let buttonText = 'Save';
	if ( isSubmitting ) {
		buttonText = 'Saving...'
	} else if ( isSuccess ) {
		buttonText = 'Options Saved!'
	}

	const defaultOption = { label: "- Choose List -", value: "" };

	return (
		<Fragment>
		<div className="wrap">
			<h1>{ __( 'Options Page', 'wop' ) }</h1>

			{ isLoading ? 'Loading..' :
			<form style={{maxWidth: '500px'}} onSubmit={ handleSubmit }>
				<Card>
					<CardBody>
						<SelectControl
							label="Mailing List Provider"
							value={ apiSettings.provider }
							options={ [
								{ label: 'Mailchimp', value: 'mc' },
								{ label: 'ConvertKit', value: 'ck' },
								{ label: 'MailerLite', value: 'ml' },
							] }
							onChange={(newValue) => handleKeyChange('provider', newValue)}
						/>
						<TextControl
							label={ __( 'API Key', 'wop' ) }
							help={ __( 'This is a custom field.', 'wop' ) }
							value={ apiSettings.api_key }
							onChange={(newValue) => handleKeyChange('api_key', newValue)}
							disabled={isLoading}
						/>
						<TextControl
							label={ __( 'Secret Key', 'wop' ) }
							help={ __( 'This is a custom field.', 'wop' ) }
							value={ apiSettings.secret_key }
							onChange={(newValue) => handleKeyChange('secret_key', newValue)}
							disabled={isLoading}
						/>
						<SelectControl
							label="Mailing List"
							value={ apiSettings.list_id }
							options={[defaultOption, ...lists.map(option => ({ label: option.name, value: option.id }))]}
							onChange={ (newValue) => handleKeyChange('list_id', newValue)}
						/>
						<Button
							variant="primary"
							type="submit"
							isBusy={ isSubmitting }
							isPressed= { isSubmitting }
							disabled={isLoading}
						>
							{ buttonText }
						</Button>
					</CardBody>
				</Card>
			</form>
			}

		</div>

	</Fragment>
	);
};
const rootElement = document.getElementById( 'wop-admin-page' );
if ( rootElement ) {
	createRoot( rootElement ).render( <OptionsPage /> );
}