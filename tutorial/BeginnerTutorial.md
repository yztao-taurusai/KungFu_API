# Beginner Tutorial

以下策略是简单的通过 **XTP** 柜台订阅浦发银行，并且在收到行情更新以后通过账号ACC_1以申卖价1买入500股浦发银行：

```python	 
# 初始化函数中添加行情柜台、交易账户、订阅行情
def init(context):
    context.add_md(Source.XTP)
    context.add_account(Source.XTP, "ACC_1", 10000.0)
    context.subscribe(Source.XTP, ["600000"], Exchange.SSE)
  
def on_quote(context, quote):
    context.log_info('[on_quote] ticker {} last_price {}'.format(quote.instrument_id, quote.last_price))
    order_id = context.insert_order("600000", Exchange.SSE, "ACC_1", quote.ask_price[0], 500, Price_Type.Limit,Side.Buy, Offset.Open)
    context.log_info('[insert] order_id {}'.format(order_id))

def on_order(context, order):
    context.log_info('[on_order] order_id {} status {}'.format(order.order_id, OrderStatus.to_str(order.status)))

def on_trade(context, trade):
    context.log_info('[on_trade] order_id {} trade_price {} trade_volume {}'.format(trade.order_id, trade.price, trade.volume))
```









