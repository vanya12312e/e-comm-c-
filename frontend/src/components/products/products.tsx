import { Card } from 'antd'

const Products = () => {
	return (
		<>
			<h2 className='text-3xl my-2 text-center'>Our Products</h2>
			<section className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
				<Card
					variant="borderless"
					style={{
						width: 240
					}}
					cover={
						< img
							draggable={false}
							alt="example"
							src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
						/>
					}
				>
					<Card.Meta title="Europe Street beat" />
					<Card.Meta title='price: $168' />
					<button className='bg-blue-500 text-white px-4 py-2 rounded mt-2 cursor-pointer'>Add to Cart</button>
				</Card>
			</section>

		</>
	)
}

export default Products