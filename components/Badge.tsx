interface BadgeProps {
	children: React.ReactNode;
	variant?: "default" | "success" | "warning" | "info";
	size?: "sm" | "md" | "lg";
}

export default function Badge({
	children,
	variant = "default",
	size = "md",
}: BadgeProps) {
	const variants = {
		default: "bg-gray-100 text-gray-700",
		success: "bg-green-100 text-green-700",
		warning: "bg-purple-100 text-purple-700",
		info: "bg-blue-100 text-blue-700",
	};

	const sizes = {
		sm: "px-2 py-1 text-xs",
		md: "px-3 py-1.5 text-sm",
		lg: "px-4 py-2 text-base",
	};

	return (
		<span
			className={`inline-flex items-center gap-1 rounded-full font-semibold ${variants[variant]} ${sizes[size]}`}
		>
			{children}
		</span>
	);
}
