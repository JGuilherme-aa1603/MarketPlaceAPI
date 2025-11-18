
export const getAllProductsService = async (supabase, categoryName, limit = 10, offset, initialValue, finalValue) => {
    let query = supabase
        .from("products")
        .select(`
            *,
            categories${categoryName ? '!inner' : ''} (
                id,
                name
            )
        `);

    if (categoryName) {
        query = query.eq("categories.name", categoryName);
    }

    if (initialValue !== undefined && initialValue !== null) {
        query = query.gte("price", initialValue);
    }

    if (finalValue !== undefined && finalValue !== null) {
        query = query.lte("price", finalValue);
    }

    query = query.range(offset, offset + limit - 1);

    const { data, error } = await query;

    if (error) {
        return new Error(`Error fetching products: ${error.message}`);
    }

    return data;
}