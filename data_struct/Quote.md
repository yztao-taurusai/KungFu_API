## Quote

|         属性         |          类型           |     注释     |
| :------------------: | :---------------------: | :----------: |
|      source_id       |           str           |    柜台ID    |
|     trading_day      |           str           |    交易日    |
|       rcv_time       |          long           | 数据接收时间 |
|      data_time       |          long           | 数据生成时间 |
|    instrument_id     |           str           |    合约ID    |
|     exchange_id      |           str           |    交易所    |
|   instrument_type    |           str           |   合约类型   |
|   pre_close_price    |          float          |    昨收价    |
| pre_settlement_price |          float          |    昨结价    |
|      last_price      |          float          |    最新价    |
|        volume        |           int           |     数量     |
|       turnover       |          float          |   成交金额   |
|  pre_open_interest   |          float          |   昨持仓量   |
|    open_interest     |          float          |    持仓量    |
|      open_price      |          float          |    今开盘    |
|      high_price      |          float          |    最高价    |
|      low_price       |          float          |    最低价    |
|  upper_limit_price   |          float          |   涨停板价   |
|  lower_limit_price   |          float          |   跌停板价   |
|     close_price      |          float          |    收盘价    |
|   settlement_price   |          float          |    结算价    |
|      bid_price       | ctype_array(float * 10) |    申买价    |
|      ask_price       | ctype_array(float * 10) |    申卖价    |
|      bid_volume      |  ctype_array(int * 10)  |    申买量    |
|      ask_volume      |  ctype_array(int * 10)  |    申卖量    |

