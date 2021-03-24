/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
const defaultProducts = [
    {
        imgUrl: 'https://www.itgenius.co.th/assets/frondend/images/picarticle/25-1-2564%2012-07-21-zukq2qxvoj4c.png',
        title: 'Sony Camera',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, omnis est dicta sed perspiciatis voluptatum iure asperiores voluptatem ad repellendus nam incidunt aspernatur ducimus facere. Nostrum adipisci modi natus magnam',
        quantity: 10,
        price: 25000.00
    },
    {
        imgUrl: 'https://www.itgenius.co.th/assets/frondend/images/picarticle/7-1-2564%2015-01-42-any58qtmz5a5.png',
        title: 'Xiaomi Mi 10i',
        description: 'Xiaomi เปิดตัว Mi 10i มือถือสเปกเบาๆ พร้อมขุมพลัง Snapdragon 750G รองรับจอ LCD 120Hz กล้อง 108 MP',
        quantity: 8,
        price: 16500.00
    }
    
]

const Cart = () => {
    document.title = 'Cart | React Shop'
    return (
        <div>
            <h1 className="mb-5">ตะกร้าสินค้า</h1>

            <div className="wrapper wrapper-content animated fadeInRight">
                <div className="row">
                    <div className="col-md-9">
                    <div className="ibox">
                        <div className="ibox-title">
                        <div className="row">
                            <div className="col-md-6"><h5>รายการสินค้าในตะกร้า</h5></div>
                            <div className="col-md-6 text-end"><span>(<strong>5</strong>) ชิ้น</span></div>
                        </div>

                        </div>

                        {
                            defaultProducts.map((product, index) => {
                                return (
                                <div className="ibox-content" key={index}>
                                    <div className="table-responsive">
                                        <table className="table shoping-cart-table">
                                        <tbody>
                                            <tr>
                                            <td width={120}>
                                                <img src={product.imgUrl} className="card-img-top" alt="..." />
                                            </td>
                                            <td className="desc">
                                                <h3>
                                                <a href="#" className="text-navy">
                                                    {product.title}
                                                </a>
                                                </h3>
                                                <p className="small">
                                                    {product.description}
                                                </p>
                                                <div className="m-t-sm">
                                                <a href="#" className="text-muted"><i className="fa fa-trash" /> ลบรายการนี้</a>
                                                </div>
                                            </td>
                                            <td>
                                                THB{product.price}
                                            </td>
                                            <td width={65}>
                                                <input type="text" className="form-control" placeholder={1} />
                                            </td>
                                            <td>
                                                <h4>
                                                THB{product.price}
                                                </h4>
                                            </td>
                                            </tr>
                                        </tbody>
                                        </table>
                                    </div>
                                </div>
                                )
                            })
                        }

                        <div className="ibox-content">
                            <div className="row">
                            <div className="col-md-6"><button className="btn btn-white"><i className="fa fa-arrow-left" /> กลับไปซื้อสินค้าต่อ</button></div>
                            <div className="col-md-6 text-end"><button className="btn btn-primary pull-right"><i className="fa fa fa-shopping-cart" /> ชำระเงิน (Check out)</button></div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="ibox">
                        <div className="ibox-title">
                        <h5>สรุปยอดชำระ</h5>
                        </div>
                        <div className="ibox-content">
                        <span>
                            รวมทั้งหมด
                        </span>
                        <h2 className="font-bold">
                            THB3,900.00
                        </h2>
                        <hr />
                        <span className="text-muted small">
                            *ราคานี้ยังไม่รวมภาษีมุลค่าเพิ่ม 7%
                        </span>
                        </div>
                    </div>
                    <div className="ibox">
                        <div className="ibox-title">
                        <h5>Support</h5>
                        </div>
                        <div className="ibox-content">
                        <h3><i className="fa fa-phone" /> +66 02 783 001</h3>
                        <span className="small">
                            หามีคำถามเกี่ยวกับสินค้าบริการ และการชำระเงินสามารถติดต่อเราได้ตลอด 24 ชม.
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
