import { Button } from "./ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";

type Props = {
    onChange: (value: string) => void;
    sortOption: string;
};

const SORT_OPTIONS = [
    {
        label: "Best match",
        value: "bestMatch",
    },
    {
        label: "Delivery Price",
        value: "deliveryPrice",
    },
    {
        label: "Estimated delivery time",
        value: "estimatedDeliveryTime",
    },
];

const SortOptionDropdown = ({ onChange, sortOption }: Props) => {
    const selectedSortLabel =
        SORT_OPTIONS.find((option) => option.value === sortOption)?.label ||
        SORT_OPTIONS[0].label;   // failsafe added to remove ts error

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="curson-pointer">
                <Button
                    variant="outline"
                    className="w-full rounded-full focus:ring-0 focus:border-none focus:outline-none"
                >
                    Sort by: {selectedSortLabel}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {SORT_OPTIONS.map((option) => (
                    <DropdownMenuItem
                        key={option.value}
                        className="cursor-pointer"
                        onClick={() => onChange(option.value)}
                    >
                        {option.label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default SortOptionDropdown;
