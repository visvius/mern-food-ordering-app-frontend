import { useGetMyOrders } from "@/api/OrderApi";
import OrderStatusDetail from "@/components/OrderStatusDetail";
import OrderStatusHeader from "@/components/OrderStatusHeader";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const OrderStatusPage = () => {
    const { orders, isLoading } = useGetMyOrders();

    if (isLoading) {
        return "Loading...";
    }

    if (!orders || orders.length === 0) {
        return "No orders found";
    }

    //display orders with lastest orders on top
    const sortedOrders = [...orders].reverse();

    return (
        <div className="space-y-10">
            {sortedOrders.map((order) => (
                <div
                    className="space-y-10 bg-gray-50 p-10 rounded-lg"
                    key={order._id}
                >
                    <OrderStatusHeader order={order} />
                    <div className="grid gap-10 md:grid-cols-2">
                        <OrderStatusDetail order={order} />
                        <AspectRatio ratio={16 / 5}>
                            <img
                                src={order.restaurant.imageUrl}
                                className="rounded-md object-cover h-full w-full"
                            />
                        </AspectRatio>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OrderStatusPage;
