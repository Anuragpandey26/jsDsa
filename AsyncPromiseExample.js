const checkInventory=()=> new Promise(res => setTimeout(() => res("In stock"), 400));
const chargePayment=()=> new Promise(res => setTimeout(() => res("Charged ₹499"), 600));
const notifyWarehouse=()=> new Promise(res => setTimeout(() => res("Warehouse notified"), 300));
const sendEmailReceipt=()=> new Promise((_,rej) => setTimeout(() => rej("Email failed"), 200));
const fastShipping=()=> new Promise(res => setTimeout(() => res("FastShip: 2 days"), 250));
const slowShipping=()=> new Promise(res => setTimeout(() => res("SlowShip: 5 days"), 800));
const notifySMS=()=> new Promise((_,rej) => setTimeout(() => rej("SMS failed"), 100));
const notifyPush=()=> new Promise(res => setTimeout(() => res("Push sent"), 150)); 
const notifyEmail=()=> new Promise(res => setTimeout(() => res("mail sent"), 300));
async function processOrder() {
  try {                                              
    // 1. Promise.all — both MUST succeed
    const [inventory, payment] = await Promise.all([
      checkInventory(),
      chargePayment()
    ]);
    console.log("Critical steps:", inventory, payment);
    // 2. Promise.allSettled — track ALL outcomes, even failures
    const logistics = await Promise.allSettled([
      notifyWarehouse(),
      sendEmailReceipt()
    ]);
    logistics.forEach(result => {
      if (result.status === "fulfilled") console.log(result.value);
      else console.warn("Non-critical failure:", result.reason);
    });
    // 3. Promise.race — whichever estimate arrives first wins
    const shippingETA = await Promise.race([
      fastShipping(),
      slowShipping()
    ]);
    console.log("Shipping ETA:", shippingETA);
    // 4. Promise.any — first channel that succeeds (SMS fails, push wins)
    const notification = await Promise.any([
      notifySMS(),
      notifyPush(),
      notifyEmail()
    ]);
    console.log("Notification sent via:", notification);
    // 5. .then() — chain next step on the notification result
    Promise.resolve(notification)
      .then(msg => console.log("Order confirmed", msg))
      .catch(err => console.error("Confirm error", err))    
      .finally(() => console.log("Order pipeline done")); 

  } catch (err) {                                    
    console.error("Order FAILED  rolling back:", err);
  } finally {                                         
    console.log("Cleanup: releasing DB connection");
  }
}
processOrder();
