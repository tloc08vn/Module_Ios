/***********************************************
> Locket RevenueCat Subscriptions by nguyentanloc
***********************************************/

// ========= ID ========= //
const mapping = {
  '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
  'Locket': ['Gold']
};

// ========= NGÀY KÍCH HOẠT GOLD (08/03/2007) ========= //
var MY_PURCHASE_DATE = "2007-03-08T10:10:14Z"; // Ngày bắt đầu có Gold
var MY_EXPIRES_DATE  = "9999-03-08T10:10:14Z"; // Ngày hết hạn Gold

// ========= Xử lý dữ liệu ========= //
var ua = $request.headers["User-Agent"] || $request.headers["user-agent"],
    obj = JSON.parse($response.body);

if (obj && obj.subscriber) {
    obj.Attention = "Chúc mừng bạn! Vui lòng không bán hoặc chia sẻ cho người khác!";
    
    var nguyencongan = {
        auto_resume_date: null,
        display_name: "locket_1600_1y",
        is_sandbox: true,
        ownership_type: "PURCHASED",
        billing_issues_detected_at: null,
        management_url: "https://apps.apple.com/account/subscriptions",
        period_type: "normal",
        price: {
            "amount": 399000.0,
            "currency": "VND"
        },
        expires_date: "9999-01-09T10:10:14Z",
        grace_period_expires_date: null,
        refunded_at: null,
        unsubscribe_detected_at: null,
        original_purchase_date: MY_PURCHASE_DATE,
        purchase_date: MY_PURCHASE_DATE,
        store: "app_store",
        store_transaction_id: "2000001108724193",
    },
    locketGold = {
        grace_period_expires_date: null,
        purchase_date: MY_PURCHASE_DATE,
        product_identifier: "locket_1600_1y",
        expires_date: "9999-01-09T10:10:14Z"
    };

    const match = Object.keys(mapping).find(e => ua.includes(e));
    if (match) {
        let [e, s] = mapping[match];
        s ? (locketGold.product_identifier = s, obj.subscriber.subscriptions[s] = nguyentanloc) : obj.subscriber.subscriptions["locket_1600_1y"] = nguyentanloc, obj.subscriber.entitlements[e] = locketGold;
    } else {
        obj.subscriber.subscriptions["locket_1600_1y"] = nguyencongan;
        obj.subscriber.entitlements.pro = locketGold;
    }
}

$done({
    body: JSON.stringify(obj)
});
