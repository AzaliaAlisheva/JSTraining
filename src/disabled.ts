export function manageDisabled(disabledId: string) {
    const prevDisabled: null | HTMLAnchorElement = document.querySelector('.disabled') as HTMLAnchorElement;
    if (prevDisabled) {
        prevDisabled.classList.remove('disabled');
    }
    const disabled = document.getElementById(disabledId) as HTMLAnchorElement;
    disabled.classList.add('disabled');
}