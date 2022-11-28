import Razorpay from 'razorpay';

export const createOrder = async (req,res) => {
    var instance = new Razorpay({
        key_id: 'rzp_test_4uKpUoI18pwvnd',
        key_secret: '0jVS1HCQfNo1RqTnLNwtmNNE'
      });
    
    const RazorpayConfig={
        key_id: 'rzp_test_4uKpUoI18pwvnd',
        key_secret: '0jVS1HCQfNo1RqTnLNwtmNNE'
      }
    
    
    const razorpayInstance = new Razorpay(RazorpayConfig);
      console.log(razorpayInstance)
  var options = {
    amount: req.body.amount,  // amount in the smallest currency unit
    currency: "INR",
    receipt: "rcp1"
  };

  razorpayInstance.orders.create(options, function(err, order) {
    console.log(err);
    console.log(order);
    // res.send({orderId : order.id});
    res.json({success:true, status:"Order created Successfully", value:order, key:razorpayInstance.key_id})
  });
}