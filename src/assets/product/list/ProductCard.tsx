import React from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import {Badge, Button, Card, Col} from 'antd';
import {Typography } from 'antd';
import NotImage from '../../assets/imagenot.png';
import {IProductItem} from "./types.ts";
import { APP_ENV } from '../../../env/index.tsx';


const { Title } = Typography;
const { Meta } = Card;

const ProductCard : React.FC<IProductItem> = (props) => {

    const {name, price, category, files} = props;

    return (
        <Col style={{padding: 10}} xxl={4} lg={6} md={8} sm={12}>
            <Badge.Ribbon
                text={'Вигідна пропозиція!'}
                color={'green'}
            >
                <Card
                    bodyStyle={{flex: '1', paddingBlock: '10px'}}
                    style={{height: 320, display: 'flex', flexDirection: 'column', paddingTop: '40px'}}
                    hoverable
                    cover={
                        <img
                            style={{height: '100px', objectFit: 'contain'}}
                            alt={name}
                            src={files[0] ? `${APP_ENV.BASE_URL}/images/${files[0]}` : NotImage}
                        />
                    }
                    actions={[
                            <Button
                                icon={<ShoppingCartOutlined/>} key="addToCart">
                                До кошика
                            </Button>
                       ,
                    ]}
                >
                    <Meta
                        title={name}
                        description={
                            <>
                                <Title level={5} type="success">{Number(price).toFixed(2)} грн</Title>
                                <p>{category}</p>
                            </>
                        }

                    />

                </Card>
            </Badge.Ribbon>
        </Col>
    );
};

export default ProductCard;