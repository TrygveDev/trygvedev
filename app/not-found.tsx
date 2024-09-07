export default function NotFound() {
	return (
		<div className="w-full h-dvh flex items-center flex-col gap-6 justify-center">
			<div className="flex items-center">
				<div className="border-r border-foreground p-2">
					<h1 className="text-2xl font-bold">404</h1>
				</div>
				<div className="p-2">
					<h1 className="font-normal">
						This page could not be found.
					</h1>
				</div>
			</div>
		</div>
	);
}
