# Order

|         属性         |          类型           |     注释     |
| :------------------: | :---------------------: | :----------: |
|      rcv_time       |           long           |  数据接收时间    |
|  order_id |           long           |    订单ID    |
|       insert_time       |          long           | 订单写入时间 |
| update_time |          long           | 订单更新时间 |
| trading_day |           str           |    交易日    |
| instrument_id |           str           |    合约ID    |
| exchange_id |           str           |   交易所ID   |
| account_id |          str          |    账号ID    |
| client_id |          str          |    Client ID    |
|      instrument_type      |          str          |    合约类型    |
|        limit_price        |           float           |     价格     |
|       frozen_price       |          float          |   冻结价格（市价单冻结价格为0.0）   |
| volume |          int          |   数量   |
| volume_traded |          int          |    成交数量    |
|      volume_left      |          int          |    剩余数量    |
|      tax      |          float          |    税    |
|  commission |          float          |    手续费    |
| status |          str          |   订单状态   |
| error_id |          int          |   错误ID   |
| error_msg |          str          |    错误信息    |
|   parent_id   |          int          |    母订单ID    |
|      side   | str |    买卖方向    |
|      offset | str |    开平方向    |
|      price_type      |  str  |    价格类型    |
|      volume_condition      |  str  |    成交量类型    |
| time_condition | str | 成交时间类型 |

