<template>
	<div class="responalContainer">
		<!-- 头部 -->
		<div class="responalHeader">
				<!-- <img src="" alt=""> -->
				<div class="left">
					<img src="http://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png" alt="">
					<div class="user">
						<p>严选用户18712919926</p>
						<p>VIP高级用户</p>
					</div>
				</div>
				<div class="right">
					<div class="icon">
						<i></i>
					</div>
					<div class="pro">
						<i></i>
						<div class="p">
							<p>Pro会员</p>
							<p>立即使用</p>
							<i></i>
						</div>
					</div>
				</div>
		</div>
		<!-- 我的资产 -->
		<div class="myAsset">
			<div class="top">我的资产</div>
			<div class="bottom">
				<ul class="bottomList">
					<li class="item">
						<span>￥0</span>
						<span>回馈金</span>
					</li>
					<li class="item">
						<span>1</span>
						<span>红包</span>
					</li>
					<li class="item">
						<span>1</span>
						<span>优惠券</span>
					</li>
					<li class="item"> 
						<span>￥0</span>
						<span>津贴</span>
					</li>
					<li class="item">
						<span>0</span>
						<span>礼品卡</span>
					</li>
				</ul>
			</div>
		</div>
		<!-- 我的订单等选项 -->
		<ul class="Menu">
			<li>
				<i></i>
				<span>我的订单</span>
			</li>
			<li class="item"> 
				<i></i>
				<span>我的订单</span>
			</li>
			<li>
				<i></i>
				<span>我的订单</span>
			</li>
			<li>
				<i></i>
				<span>我的订单</span>
			</li>
			<li  class="item"> 
				<i></i>
				<span>我的订单</span>
			</li>
			<li>
				<i></i>
				<span>我的订单</span>
			</li>
			<li>
				<i></i>
				<span>我的订单</span>
			</li>
			<li class="item">
				<i></i>
				<span>我的订单</span>
			</li>
			<li>
				<i></i>
				<span>我的订单</span>
			</li>
			<li class="item">
				<i></i>
				<span>我的订单</span>
			</li>
			<li>
				<i></i>
				<span>我的订单</span>
			</li>
		</ul>
		<!-- 退出登录 -->
		<div class="denglu">退出登录</div>
		<!-- 底部导航 -->
	</div>
</template>

<script>
export default {
	
}
</script>
<style lang="less" scoped>
.responalContainer{
	// height: 100%;
	background-color: #eee;
	// 头部
	.responalHeader{
		box-sizing: border-box;
		height: 270;
		background: url('http://yanxuan.nosdn.127.net/5905098f74e04c39fa5e76ebb9ff591b.png?imageView&type=webp');
		background-size: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		img{
			width: 100%;
			height: 270px;
		}
		.left{
			width: 510px;
			height: 270px;
			display: flex;
			// justify-content: space-between;
			align-items: center;
			img{
				width: 142px;
				height: 142px;
				margin-left: 40px;
				margin-right: 40px;
				border-radius: 50%;
			}
			p{
				width: 338px;
				color: #fff;
				&:nth-of-type(1){
					font-size: 36px;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					margin-bottom: 10px;
				}
				&:nth-of-type(2){
					font-size: 26px;
				}
			}
		}
		.right{
			overflow: hidden;
			height: 210px;
			width: 188px;
			display: flex;
			flex-direction: column;
			.icon{
					width: 64px;
					height: 64px;
					margin-bottom: 50px;
				i{
					display: block;
					width: 64px;
					height: 64px;
					background: url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/ucenter-sce1e54f581-5d697fd33d.png?imageView&type=webp') no-repeat;
					background-size: 100%;
					background-position-y: -190px;
					margin-top: 30px;
					margin-left: 100px;				
				}
			}

			.pro{
				width: 203px;
				height: 84px;
				background-image: linear-gradient(180deg,#574E44 0,#0E0E0E 100%);
				border-top-left-radius: 40px;
				border-bottom-left-radius: 40px;
				color: #F9E0C0;
				display: flex;
				align-items: center;
				box-sizing: border-box;
				i{
					display: block;
					width: 56px;
					height: 56px;
					margin-left: 10px;
					margin-right: 10px;
					margin-bottom: 22px;
					background: url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/ucenter-sce1e54f581-5d697fd33d.png?imageView&type=webp') no-repeat;
					background-size: 100%;
					background-position-y: -55px;
				}
				p{
					&:nth-of-type(1){
						font-size: 26px;
					}
					&:nth-of-type(2){
						transform: scale(.8);
					}
				}
				.p{
					position: relative;
					i{
						background: url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/ucenter-sce1e54f581-5d697fd33d.png?imageView&type=webp') no-repeat;
						background-size: 100%;
						background-position-y: -28px;
						position: absolute;
						right: -55px;
						bottom: -15px;
						width: 50px;
						height: 24px;
					}
				}
			}
		}
	}
	//我的资产
	.myAsset{
		box-sizing: border-box;
		height: 285px;
		padding-left: 40px;
		margin-bottom: 20px;
		background-color: #fff;
		.top{
			height: 105px;
			font-size: 30px;
			line-height: 105px;
			border-bottom: 1px solid #eee;
			box-sizing: border-box;
		}
		.bottomList{
			display: flex;
			justify-content: space-between;
			padding-right: 40px;
			box-sizing: border-box;
			.item{
				margin-top: 50px;
				display: flex;
				flex-direction: column;
				align-items: center;
				span{
					&:nth-of-type(1){
						font-size: 30px;
						font-weight: bold;
						margin-bottom: 15px;
					}
				}
			}
		}
	}
	//我的订单等选项
	.Menu{
		background-color: #fafafa;
		// height: 723px;
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 40px;
		li{
			width: 250px;
			height: 181px;
			display: flex;
			flex-direction: column;
			align-items: center;
			padding-top: 40px;
			box-sizing: border-box;
			border-bottom: 1px solid #eee;
			i{
					display: block;
					width: 90px;
					height: 72px;
					background: url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/ucenter-sce1e54f581-5d697fd33d.png?imageView&type=webp') no-repeat;
					background-size: 100%;
					background-position-y: -990px;
					margin-bottom: 6px;
			}
			span{
				margin-left: -30px;
			}
		}
		.item{
			border-left: 1px solid #eee;
			border-right: 1px solid #eee;
		}
	}
	//退出登录
	.denglu{
		height: 96px;
		background-color: #fff;
		margin-bottom: 120px;
		font-size: 30px;
		line-height: 96px;
		text-align: center;
	}
}
</style>