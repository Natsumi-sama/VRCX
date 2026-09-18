/**
 * Creates stable IDs for live rows without retaining removed row objects.
 * These IDs survive table rebuilds, but not replacement with database objects.
 *
 * @returns {(row: object) => string}
 */
export function createLocalRowId() {
    const rowIds = new WeakMap();
    let nextRowId = 0;

    return (row) => {
        let id = rowIds.get(row);
        if (id === undefined) {
            id = `local:${++nextRowId}`;
            rowIds.set(row, id);
        }
        return id;
    };
}
