/**
 * Helper used to know if the given modifier depends from another one.
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
export default function isModifierRequired(modifiers, requestingName, requestedName) {
    // find is not supported by IE
    const requesting = modifiers.filter(({ name }) => name === requestingName)[0];

    return !!requesting && modifiers.some((modifier) => {
      return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
    });
}
