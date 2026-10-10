import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Form, Input } from 'antd'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

const loginSchema = z.object({
	username: z.string().min(1, { message: 'Username is required' }),
	password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
})

type LoginValues = z.infer<typeof loginSchema>

const LoginForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<LoginValues>({
		resolver: zodResolver(loginSchema),
		defaultValues: { username: '', password: '' },
	})

	const onSubmit = (data: LoginValues) => {
		console.log(data)
	}

	return (
		<Form layout="vertical" onFinish={handleSubmit(onSubmit)} style={{ maxWidth: 400, margin: '100px auto' }}>
			<Form.Item
				label="Username"
				validateStatus={errors.username ? 'error' : ''}
				help={errors.username?.message}
			>
				<Controller
					name="username"
					control={control}
					render={({ field }) => <Input {...field} autoComplete="username" />}
				/>
			</Form.Item>

			<Form.Item
				label="Password"
				validateStatus={errors.password ? 'error' : ''}
				help={errors.password?.message}
			>
				<Controller
					name="password"
					control={control}
					render={({ field }) => (
						<Input.Password {...field} autoComplete="current-password" />
					)}
				/>
			</Form.Item>

			<Button type="primary" htmlType="submit" loading={isSubmitting} block>
				Login
			</Button>
		</Form>
	)
}

export default LoginForm