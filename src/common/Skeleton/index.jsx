function ProductSkeleton() {
  return (
    <div className="flex h-64 w-56 animate-pulse flex-col gap-4 rounded-xl bg-[#00000014] p-4">
      <div className="h-32 w-full animate-pulse rounded-md bg-neutral-400/30"></div>
      <div className="flex flex-col gap-2">
        <div className="h-4 w-full animate-pulse rounded-md bg-neutral-400/30"></div>
        <div className="h-4 w-4/5 animate-pulse rounded-md bg-neutral-400/30"></div>
        <div className="h-4 w-full animate-pulse rounded-md bg-neutral-400/30"></div>
        <div className="h-4 w-2/4 animate-pulse rounded-md bg-neutral-400/30"></div>
      </div>
    </div>
  );
}

export default ProductSkeleton;
